import VideoFeed from "./VideoFeed";

function App() {
  return (
    <div className="app">
      Hello World!
      <VideoFeed src="http://localhost:8083/stream/27aec28e-6181-4753-9acd-0456a75f0289/channel/0/hls/live/index.m3u8" />
    </div>
  );
}

export default App;