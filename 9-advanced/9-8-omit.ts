{
  //선택한게 명확하다면 pick을 빼고싶은게 명확하다면 Omit
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetaData = Omit<Video, "url" | "data">;

  function getVideos(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetadatas(id: string): VideoMetaData {
    return {
      id: id,
      title: "title",
    };
  }
}
