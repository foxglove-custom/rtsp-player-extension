import { ExtensionContext } from "@foxglove/studio";
import { initRTSPPanel } from "./RTSPPanel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({ name: "RTSP流媒体播放", initPanel: initRTSPPanel });
}
