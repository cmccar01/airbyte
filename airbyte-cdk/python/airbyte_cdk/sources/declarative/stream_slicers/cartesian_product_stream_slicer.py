#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#

import itertools
from collections import ChainMap
from dataclasses import dataclass
from typing import Any, Iterable, List, Mapping, Optional

from airbyte_cdk.models import SyncMode
from airbyte_cdk.sources.declarative.stream_slicers.stream_slicer import StreamSlicer


@dataclass
class CartesianProductStreamSlicer(StreamSlicer):
    """
    Stream slicers that iterates over the cartesian product of input stream slicers
    Given 2 stream slicers with the following slices:
    A: [{"i": 0}, {"i": 1}, {"i": 2}]
    B: [{"s": "hello"}, {"s": "world"}]
    the resulting stream slices are
    [
        {"i": 0, "s": "hello"},
        {"i": 0, "s": "world"},
        {"i": 1, "s": "hello"},
        {"i": 1, "s": "world"},
        {"i": 2, "s": "hello"},
        {"i": 2, "s": "world"},
    ]

    Attributes:
        stream_slicers (List[StreamSlicer]): Underlying stream slicers. The RequestOptions (e.g: Request headers, parameters, etc..) returned by this slicer are the combination of the RequestOptions of its input slicers. If there are conflicts e.g: two slicers define the same header or request param, the conflict is resolved by taking the value from the first slicer, where ordering is determined by the order in which slicers were input to this composite slicer.
    """

    stream_slicers: List[StreamSlicer]

    def update_cursor(self, stream_slice: Mapping[str, Any], last_record: Optional[Mapping[str, Any]] = None):
        for slicer in self.stream_slicers:
            slicer.update_cursor(stream_slice, last_record)

    def get_request_params(self) -> Mapping[str, Any]:
        return dict(ChainMap(*[s.get_request_params() for s in self.stream_slicers]))

    def get_request_headers(self) -> Mapping[str, Any]:
        return dict(ChainMap(*[s.get_request_headers() for s in self.stream_slicers]))

    def get_request_body_data(self) -> Mapping[str, Any]:
        return dict(ChainMap(*[s.get_request_body_data() for s in self.stream_slicers]))

    def get_request_body_json(self) -> Optional[Mapping]:
        return dict(ChainMap(*[s.get_request_body_json() for s in self.stream_slicers]))

    def request_kwargs(self) -> Mapping[str, Any]:
        # Never update kwargs
        return {}

    def get_stream_state(self) -> Mapping[str, Any]:
        return dict(ChainMap(*[slicer.get_stream_state() for slicer in self.stream_slicers]))

    def stream_slices(self, sync_mode: SyncMode, stream_state: Mapping[str, Any]) -> Iterable[Mapping[str, Any]]:
        sub_slices = (s.stream_slices(sync_mode, stream_state) for s in self.stream_slicers)
        return (ChainMap(*a) for a in itertools.product(*sub_slices))
