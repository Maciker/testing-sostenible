export class SurveillanceController {
    constructor(private sensor: FakeMotionSensor, private recorder: FakeVideoRecorder) {}

    recordMotion() {
        this.sensor.isDetectingMotion()
            ? this.recorder.startRecording()
            : this.recorder.stopRecording();
    }
}

export interface MotionSensor {
    isDetectingMotion(): boolean;
}

export interface VideoRecorder {
    startRecording(): void;
    stopRecording(): void;
}

class FakeMotionSensor implements MotionSensor{
    isDetectingMotion(): boolean {
        return false;
    }
}

class FakeVideoRecorder implements VideoRecorder{
    startRecording() {
        console.log('Recording is on')
    }
    stopRecording() {
        console.log('Reecording is off')
    }
}