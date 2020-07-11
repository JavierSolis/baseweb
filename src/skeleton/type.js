/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import type {OverrideT} from '../helpers/overrides.js';

export type OverridesT = {
  Row?: OverrideT,
  Root?: OverrideT,
};

export type SkeletonPropsT = {
  overrides?: OverridesT,
  /** Defines the number of row element in a skeleton */
  rows: number,
};
