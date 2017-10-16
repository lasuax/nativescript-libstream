/// <reference path="./libstream.d.ts" />

import { Common } from './libstream.common';
export class Libstream extends Common {

}


export class Session extends net.majorkernelpanic.streaming.Session {

    /**
     *
     */
    private _session: net.majorkernelpanic.streaming.Session;
    constructor() {
        super();
        this._session = new net.majorkernelpanic.streaming.Session();
        // this._callBack = new net.majorkernelpanic.streaming.Session.Callback(
        //     {
        //         onBitrateUpdate(param0: number): void { },
        //         onSessionError(param0: number, param1: number, param2: java.lang.Exception): void { },
        //         onPreviewStarted(): void { },
        //         onSessionConfigured(): void { },
        //         onSessionStarted(): void { },
        //         onSessionStopped(): void { }
        //     }
        // )
    }

}

export class SessionBuilder extends net.majorkernelpanic.streaming.SessionBuilder {

    public _builder: net.majorkernelpanic.streaming.SessionBuilder;

    /**
     *
     */
    constructor() {
        super();
        this._builder = new net.majorkernelpanic.streaming.SessionBuilder();
    }

    public getInstance(): net.majorkernelpanic.streaming.SessionBuilder {
        return net.majorkernelpanic.streaming.SessionBuilder.getInstance();
    }
    public setContext(param0: android.content.Context): net.majorkernelpanic.streaming.SessionBuilder {
        return this._builder.setContext(param0);
    }

    public getAudioEncoder(): number {
        return this._builder.getAudioEncoder();
    }

    public setAudioQuality(param0: net.majorkernelpanic.streaming.audio.AudioQuality): net.majorkernelpanic.streaming.SessionBuilder {
        return this._builder.setAudioQuality(param0);
    }

    public setVideoEncoder(param0: number): net.majorkernelpanic.streaming.SessionBuilder {
        return this._builder.setVideoEncoder(param0);
    }

    public setSurfaceView(param0: net.majorkernelpanic.streaming.gl.SurfaceView): net.majorkernelpanic.streaming.SessionBuilder {
        return this._builder.setSurfaceView(param0);
    }

    public setPreviewOrientation(param0: number): net.majorkernelpanic.streaming.SessionBuilder {
        return this._builder.setPreviewOrientation(param0);
    }

    public setCallback(param0: net.majorkernelpanic.streaming.Session.Callback): net.majorkernelpanic.streaming.SessionBuilder {
        return this._builder.setCallback(param0);
    }

    public build(): net.majorkernelpanic.streaming.Session {
        return this._builder.build();
    }
}

export class AudioQuality extends net.majorkernelpanic.streaming.audio.AudioQuality {
    /**
     *
     */
    constructor(param0: number, param1: number) {
        super();
    }
}

export class SurfaceView extends net.majorkernelpanic.streaming.gl.SurfaceView {
    /**
     *
     */
    constructor(param0: android.content.Context, param1: android.util.AttributeSet) {
        super(param0, param1);               
    }
}