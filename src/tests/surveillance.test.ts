import {MotionSensor, VideoRecorder, SurveillanceController } from '../surveillanceController'

describe('The Surveillance Controller', ()=> {
    it('asks the recorder to stop recording when the sensor detects no motion', () => {
        let called = false
        const saveCall = () => {
            called = true
        }
        const sensor = new FakeMotionSensor()
        const recorder = new FakeVideoRecorder()
        recorder.stopRecording = saveCall
        const controller = new SurveillanceController(sensor, recorder)

        controller.recordMotion()

        expect(called).toBeTruthy()
    })
    it('asks the recorder to start recording when the sensor detects motion', () => {
        let called = false
        const saveCall = () => {
            called = true
        }
        const sensor = new FakeMotionSensor()
        sensor.isDetectingMotion = ()=> true
        const recorder = new FakeVideoRecorder()
        recorder.startRecording = saveCall
        const controller = new SurveillanceController(sensor, recorder)

        controller.recordMotion()

        expect(called).toBeTruthy()
    })
})

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