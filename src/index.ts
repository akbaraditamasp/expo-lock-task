import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoLockTask.web.ts
// and on native platforms to ExpoLockTask.ts
import ExpoLockTaskModule from './ExpoLockTaskModule';
import ExpoLockTaskView from './ExpoLockTaskView';
import { ChangeEventPayload, ExpoLockTaskViewProps } from './ExpoLockTask.types';

// Get the native constant value.
export const PI = ExpoLockTaskModule.PI;

export function hello(): string {
  return ExpoLockTaskModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoLockTaskModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoLockTaskModule ?? NativeModulesProxy.ExpoLockTask);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoLockTaskView, ExpoLockTaskViewProps, ChangeEventPayload };
