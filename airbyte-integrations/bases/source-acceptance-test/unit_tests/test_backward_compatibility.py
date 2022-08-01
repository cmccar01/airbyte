#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#

import pytest
from airbyte_cdk.models import ConnectorSpecification
from source_acceptance_test.tests.test_backward_compatibility import TestSpecBackwardCompatibility as _TestSpecBackwardCompatibility

from .conftest import does_not_raise


@pytest.mark.parametrize(
    "previous_connector_spec, actual_connector_spec, expectation",
    [
        pytest.param(
            ConnectorSpecification(connectionSpecification={}),
            ConnectorSpecification(
                connectionSpecification={
                    "required": ["a", "b"],
                }
            ),
            pytest.raises(AssertionError),
            id="Top level: declaring the required field should fail.",
        ),
        pytest.param(
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {"my_optional_object": {"type": "object", "properties": {"optional_property": {"type": "string"}}}},
                }
            ),
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_optional_object": {
                            "type": "object",
                            "required": ["optional_property"],
                            "properties": {"optional_property": {"type": "string"}},
                        }
                    },
                }
            ),
            pytest.raises(AssertionError),
            id="Nested level: adding the required field should fail.",
        ),
        pytest.param(
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "required": ["my_required_string"],
                    "properties": {
                        "my_required_string": {"type": "string"},
                    },
                }
            ),
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "required": ["my_required_string"],
                    "properties": {
                        "my_required_string": {"type": "string"},
                        "my_optional_object": {
                            "type": "object",
                            "required": ["another_required_string"],
                            "properties": {"another_required_string": {"type": "string"}},
                        },
                    },
                }
            ),
            does_not_raise(),
            id="Adding an optional object with required properties should not fail.",
        ),
    ],
)
def test_new_required_field_declaration(previous_connector_spec, actual_connector_spec, expectation):
    t = _TestSpecBackwardCompatibility()
    spec_diff = t.compute_spec_diff(actual_connector_spec, previous_connector_spec)
    with expectation:
        t.test_new_required_field_declaration(spec_diff)


@pytest.mark.parametrize(
    "previous_connector_spec, actual_connector_spec, expectation",
    [
        pytest.param(
            ConnectorSpecification(
                connectionSpecification={
                    "required": ["a"],
                }
            ),
            ConnectorSpecification(
                connectionSpecification={
                    "required": ["a", "b"],
                }
            ),
            pytest.raises(AssertionError),
            id="Top level: adding a new required property should fail.",
        ),
        pytest.param(
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_optional_object": {
                            "type": "object",
                            "required": ["first_required_property"],
                            "properties": {"first_required_property": {"type": "string"}},
                        }
                    },
                }
            ),
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_optional_object": {
                            "type": "object",
                            "required": ["first_required_property", "second_required_property"],
                            "properties": {
                                "first_required_property": {"type": "string"},
                                "second_required_property": {"type": "string"},
                            },
                        }
                    },
                }
            ),
            pytest.raises(AssertionError),
            id="Nested level: adding a new required property should fail.",
        ),
    ],
)
def test_new_required_property(previous_connector_spec, actual_connector_spec, expectation):
    t = _TestSpecBackwardCompatibility()
    spec_diff = t.compute_spec_diff(actual_connector_spec, previous_connector_spec)
    with expectation:
        t.test_new_required_property(spec_diff)


@pytest.mark.parametrize(
    "previous_connector_spec, actual_connector_spec, expectation",
    [
        pytest.param(
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_int": {"type": [None, "int"]},
                    },
                }
            ),
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_int": {"type": "int"},
                    },
                }
            ),
            pytest.raises(AssertionError),
            id="Top level: Changing a field type from list to string should fail.",
        ),
        pytest.param(
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_int": {"type": "int"},
                    },
                }
            ),
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_int": {"type": [None, "int"]},
                    },
                }
            ),
            does_not_raise(),
            id="Top level: Changing a field type from string to list should not fail.",
        ),
        pytest.param(
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_nested_object": {"type": "object", "properties": {"my_property": {"type": [None, "int"]}}},
                    },
                }
            ),
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_nested_object": {"type": "object", "properties": {"my_property": {"type": "int"}}},
                    },
                }
            ),
            pytest.raises(AssertionError),
            id="Nested level: Changing a field type from list to string should fail.",
        ),
        pytest.param(
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_nested_object": {"type": "object", "properties": {"my_property": {"type": "int"}}},
                    },
                }
            ),
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_nested_object": {"type": "object", "properties": {"my_property": {"type": [None, "int"]}}},
                    },
                }
            ),
            does_not_raise(),
            id="Nested level: Changing a field type from string to list should not fail.",
        ),
    ],
)
def test_type_field_changed_from_list_to_string(previous_connector_spec, actual_connector_spec, expectation):
    t = _TestSpecBackwardCompatibility()
    spec_diff = t.compute_spec_diff(actual_connector_spec, previous_connector_spec)
    with expectation:
        t.test_type_field_changed_from_list_to_string(spec_diff)


@pytest.mark.parametrize(
    "previous_connector_spec, actual_connector_spec, expectation",
    [
        pytest.param(
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_required_string": {"type": [None, "string"]},
                    },
                }
            ),
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_required_string": {"type": ["string"]},
                    },
                }
            ),
            pytest.raises(AssertionError),
            id="Top level: Narrowing a field type should fail.",
        ),
        pytest.param(
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_required_string": {"type": ["int"]},
                    },
                }
            ),
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_required_string": {"type": [None, "int"]},
                    },
                }
            ),
            does_not_raise(),
            id="Top level: Expanding a field type should not fail.",
        ),
        pytest.param(
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_nested_object": {"type": "object", "properties": {"my_property": {"type": [None, "int"]}}},
                    },
                }
            ),
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_nested_object": {"type": "object", "properties": {"my_property": {"type": ["int"]}}},
                    },
                }
            ),
            pytest.raises(AssertionError),
            id="Nested level: Narrowing a field type should fail.",
        ),
        pytest.param(
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_nested_object": {"type": "object", "properties": {"my_property": {"type": ["int"]}}},
                    },
                }
            ),
            ConnectorSpecification(
                connectionSpecification={
                    "type": "object",
                    "properties": {
                        "my_nested_object": {"type": "object", "properties": {"my_property": {"type": [None, "int"]}}},
                    },
                }
            ),
            does_not_raise(),
            id="Nested level: Expanding a field type should not fail.",
        ),
    ],
)
def test_type_field_has_narrowed(previous_connector_spec, actual_connector_spec, expectation):
    t = _TestSpecBackwardCompatibility()
    spec_diff = t.compute_spec_diff(actual_connector_spec, previous_connector_spec)
    with expectation:
        t.test_type_field_has_narrowed(spec_diff)
