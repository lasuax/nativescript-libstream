import { Observable } from 'tns-core-modules/data/observable';
import { Libstream, Session, AudioQuality, SessionBuilder, SurfaceView } from 'nativescript-libstream';
import * as utils from "tns-core-modules/utils/utils";

export class HelloWorldModel extends Observable {

  public message: string;
  private libstream: Libstream;
  private session: Session;
  private _sessionBuilder: SessionBuilder;
  private audioQuality: AudioQuality;
  private surfaceView: net.majorkernelpanic.streaming.gl.SurfaceView;
  private surface: android.view.Surface;

  constructor() {
    super();

    this.libstream = new Libstream();
    this.audioQuality = AudioQuality.DEFAULT_AUDIO_QUALITY;
    this.delay(5000);
    let holder = new android.view.SurfaceView(utils.ad.getApplicationContext()).getHolder();
    this.surfaceView = holder.getSurface();
    // console.log(this.surfaceView);

    // this.TEST();
    // var test = this._sessionBuilder.getSurfaceView(); 
    // console.log(this.surfaceView);
    // this.surfaceView = new SurfaceView(utils.ad.getApplicationContext(), this.surface);
    // console.log(surface);
    // console.log(this.surfaceView);


    // .setContext(utils.ad.getApplicationContext())
    // .setAudioEncoder(SessionBuilder.AUDIO_AAC)
    // .setAudioQuality(this.audioQuality)
    // .setVideoEncoder(SessionBuilder.VIDEO_H264)
    // .setSurfaceView(test)
    // .setPreviewOrientation(0)
    // .setCallback(null)
    // .build();

    // console.log(test2);
    this.message = this.libstream.message;
  }

  TEST() {
    var instance = SessionBuilder.getInstance();
    console.log("instance: " + instance);
    var context = instance.setContext(utils.ad.getApplicationContext());
    console.log("context: " + context);
    var audioEncoder = context.setAudioEncoder(SessionBuilder.AUDIO_AAC);
    console.log("audioEncoder: " + audioEncoder);
    var audioQuality = audioEncoder.setAudioQuality(this.audioQuality);
    console.log("audioQuality: " + audioQuality);
    var videoEncoder = audioQuality.setVideoEncoder(SessionBuilder.VIDEO_H264);
    console.log("videoEncoder: " + videoEncoder);
    var surfaceView = videoEncoder.setSurfaceView(this.surfaceView);
    console.log("surfaceView: " + surfaceView);
    var previewOrientation = this._sessionBuilder.setPreviewOrientation(0);
    console.log("previewOrientation: " + previewOrientation);
    var callBack = previewOrientation.setCallback(null);
    console.log("callBack: " + callBack);
    var build = callBack.build();
    console.log("build:" + build);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(this.TEST, ms));
  }
}
