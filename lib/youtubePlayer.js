const youtubePlayer = () => {
  const key = "AIzaSyCM3MR0IaalAm5x682KDp0zQfVkXBnn4es";
  const playlistId = "PLYj1Pqt2CKT-b-0KyEgbXGBs4BFmhO4lE";
  const URL = `GET https://www.googleapis.com/youtube/v3/playlistItems`;

  const options = {
    part: "snippet",
    key: key,
    maxResults: 15,
    playlistId: playlistId,
  };
};

export default youtubePlayer;
