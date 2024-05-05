package expo.modules.locktask

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.app.Activity
import android.app.ActivityManager;
import android.content.Context;
import android.os.Build;

class ExpoLockTaskModule : Module() {
  companion object {
    var activity: Activity? = null
  }

  override fun definition() = ModuleDefinition {
    Name("ExpoLockTask")

    Function("isLocked") {
      getStatus()
    }

    Function("startLockTask") {
      val currActivity = activity
      if(currActivity != null) {
        activity?.startLockTask()
      }
    }
    
    Function("stopLockTask") {
      val currActivity = activity
      if(currActivity != null) {
        activity?.stopLockTask()
      }
    }
  }

  private fun getStatus(): Boolean {
    var isLockTaskRunning: Boolean = true;
    val currActivity = activity

    if(currActivity == null) {
      return false
    }

    val activityManager = activity?.getSystemService(Context.ACTIVITY_SERVICE) as? ActivityManager

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
      isLockTaskRunning = activityManager?.lockTaskModeState == ActivityManager.LOCK_TASK_MODE_PINNED
    } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      // Deprecated in API level 23.
      isLockTaskRunning = activityManager?.isInLockTaskMode ?: false
    }

    return isLockTaskRunning
  }
}
