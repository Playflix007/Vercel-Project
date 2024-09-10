import data from '../../jup.json'; // jup.json डेटा इम्पोर्ट करा

export default (req, res) => {
  const { id } = req.query;
  
  // jup.json मधून चॅनेल शोधा
  const channelData = data.find(channel => channel.id === parseInt(id));

  if (channelData) {
    res.status(200).json(channelData);  // चॅनेल डेटा रिटर्न करा
  } else {
    res.status(404).json({ error: "Channel not found" });  // चॅनेल नसेल तर एरर द्या
  }
};
