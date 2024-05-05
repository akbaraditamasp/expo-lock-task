import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoLockTaskViewProps } from './ExpoLockTask.types';

const NativeView: React.ComponentType<ExpoLockTaskViewProps> =
  requireNativeViewManager('ExpoLockTask');

export default function ExpoLockTaskView(props: ExpoLockTaskViewProps) {
  return <NativeView {...props} />;
}
