import * as React from 'react';

import { ExpoLockTaskViewProps } from './ExpoLockTask.types';

export default function ExpoLockTaskView(props: ExpoLockTaskViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
