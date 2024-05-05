// Import the native module. On web, it will be resolved to ExpoLockTask.web.ts
// and on native platforms to ExpoLockTask.ts
import ExpoLockTaskModule from "./ExpoLockTaskModule";

export function isLocked(): boolean {
  return ExpoLockTaskModule.isLocked();
}

export function startLockTask(): void {
  return ExpoLockTaskModule.startLockTask();
}

export function stopLockTask(): void {
  return ExpoLockTaskModule.stopLockTask();
}
