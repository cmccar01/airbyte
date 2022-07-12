import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

import { StreamTransform } from "core/request/AirbyteClient";

import { DiffVerb } from "../CatalogDiffModal";
import { ModificationIcon } from "./ModificationIcon";
import styles from "./StreamRow.module.scss";

interface StreamRowProps {
  streamTransform: StreamTransform;
  syncMode?: string;

  diffVerb: DiffVerb;
}

export const SyncModeBox: React.FC<{ syncModeString: string }> = ({ syncModeString }) => {
  return <div className={styles.syncModeBox}> {syncModeString} </div>;
};

export const StreamRow: React.FC<StreamRowProps> = ({ streamTransform, syncMode, diffVerb }) => {
  const rowStyle = classnames(styles.row, {
    [styles.add]: diffVerb === "new",
    [styles.remove]: diffVerb === "removed",
  });

  const iconStyle = classnames(styles.icon, {
    [styles.plus]: diffVerb === "new",
    [styles.minus]: diffVerb === "removed",
    [styles.mod]: diffVerb === "changed",
  });

  const itemName = streamTransform.streamDescriptor.name;
  const namespace = streamTransform.streamDescriptor.namespace;
  console.log(syncMode);
  return (
    <tr className={rowStyle}>
      <td>
        {diffVerb === "new" ? (
          <FontAwesomeIcon icon={faPlus} size="1x" className={iconStyle} />
        ) : diffVerb === "removed" ? (
          <FontAwesomeIcon icon={faMinus} size="1x" className={iconStyle} />
        ) : (
          <ModificationIcon />
        )}
      </td>
      {namespace && <td className={styles.nameCell}>{namespace}</td>}
      <td className={styles.nameCell}>{itemName}</td>
      {diffVerb === "removed" && syncMode && (
        <td>
          <SyncModeBox syncModeString={syncMode} />
        </td>
      )}
    </tr>
  );
};
