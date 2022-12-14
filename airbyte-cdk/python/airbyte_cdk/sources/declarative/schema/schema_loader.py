#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#

from abc import ABC, abstractmethod
from typing import Any, Mapping


class SchemaLoader(ABC):
    """Describes a stream's schema"""

    @abstractmethod
    def get_json_schema(self) -> Mapping[str, Any]:
        """Returns a mapping describing the stream's schema"""
        pass
