package expo.modules.locktask

import android.app.Activity
import android.os.Bundle
import expo.modules.core.interfaces.ReactActivityLifecycleListener

class MyLibReactActivityLifecycleListener : ReactActivityLifecycleListener {
  override fun onCreate(activity: Activity, savedInstanceState: Bundle?) {
    // Your setup code in `Activity.onCreate`.
    ExpoLockTaskModule.activity = activity
  }
}