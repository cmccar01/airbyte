# Step 2: Install dependencies

Let's create a python virtual environment for our source.
You can do this by executing the following commands from the root of the Airbyte repository.
The command below assume that `python` points to a version of python &gt;=3.9.0. On some systems, `python` points to a Python2 installation and `python3` points to Python3.
If this is the case on your machine, substitute the `python` commands with `python3`.
The subsequent `python` invocations will use the virtual environment created for the connector.

```
python tools/bin/update_intellij_venv.py -modules source-exchange-rates-tutorial --install-venv
cd airbyte-integrations/connectors/source-exchange-rates-tutorial
source .venv/bin/activate
```

These steps create an initial python environment, and install the dependencies required to run an API Source connector.

Let's verify everything works as expected by running the Airbyte `spec` command: #FIXME: There should be a link to the spec doc

```
python main.py spec

```

You should see an output similar to the one below:

```
{"type": "SPEC", "spec": {"documentationUrl": "https://docsurl.com", "connectionSpecification": {"$schema": "http://json-schema.org/draft-07/schema#", "title": "Python Http Tutorial Spec", "type": "object", "required": ["TODO"], "additionalProperties": false, "properties": {"TODO: This schema defines the configuration required for the source. This usually involves metadata such as database and/or authentication information.": {"type": "string", "description": "describe me"}}}}}
```

More details on the `spec` command can be found [here](./spec), but this is a simple sanity check to make sure everything is wired up correctly. >>>>FIXME: need to fix the link

For now, note that the `main.py` file is a convenience wrapper to help run the connector.
Its invocation format is `python main.py <command> [args]`.
The module's generated `README.md` contains more details on the supported commands.

## Next steps

Next, we'll [connect to the API source](./3-connecting.md)