class Block {
  constructor({ timestamp, prevHash, hash, data }) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
  }
}

const block1 = new Block({
  timestamp: "14/11/2024",
  prevHash: "0xc12",
  hash: "0xacb",
  data: "hello",
});

const block2 = new Block({
  timestamp: "15/11/2024",
  prevHash: "0xacb",
  hash: "2b3sx",
  data: "World",
});

