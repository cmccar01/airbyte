#
# Copyright (c) 2021 Airbyte, Inc., all rights reserved.
#
from airbyte_cdk.sources.lcc.create_partial import create
from airbyte_cdk.sources.lcc.interpolation.interpolated_string import InterpolatedString


class AClass:
    def __init__(self, parameter, another_param):
        self.parameter = parameter
        self.another_param = another_param


class OuterClass:
    def __init__(self, name, some_field, inner_param):
        self.name = name
        self.some_field = some_field
        self.inner_param = inner_param


class OuterOuterClass:
    def __init__(self, name, param, inner_class):
        self.name = name
        self.param = param
        self.inner_class = inner_class


def test_pass_parameter_to_create_function():
    object = create(AClass, parameter="A")(another_param="B")
    assert object.parameter == "A"
    assert object.another_param == "B"


def test_overwrite_param():
    object = create(AClass, parameter="A", another_param="B")(parameter="C")
    assert object.parameter == "C"
    assert object.another_param == "B"


def test_string_interpolation():
    s = "{{ next_page_token['next_page_url'] }}"
    partial = create(InterpolatedString, string=s)
    interpolated_string = partial()
    assert interpolated_string._string == s