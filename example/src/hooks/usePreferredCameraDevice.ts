import { useMMKVString } from 'react-native-mmkv'
import { useCallback, useMemo } from 'react'
import type { CameraDevice } from '@harukiyamamori/react-native-vision-camera-fix-ios-mlkit'
import { useCameraDevices } from '@harukiyamamori/react-native-vision-camera-fix-ios-mlkit'

export function usePreferredCameraDevice(): [CameraDevice | undefined, (device: CameraDevice) => void] {
  const [preferredDeviceId, setPreferredDeviceId] = useMMKVString('camera.preferredDeviceId')

  const set = useCallback(
    (device: CameraDevice) => {
      setPreferredDeviceId(device.id)
    },
    [setPreferredDeviceId],
  )

  const devices = useCameraDevices()
  const device = useMemo(() => devices.find((d) => d.id === preferredDeviceId), [devices, preferredDeviceId])

  return [device, set]
}
