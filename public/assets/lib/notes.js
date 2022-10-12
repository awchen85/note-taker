function createNewZookeeper(body, zookeepers) {
    const tasks = body;
    zookeepers.push(zookeeper);
    fs.writeFileSync(
      path.join(__dirname, '../data/zookeepers.json'),
      JSON.stringify({ zookeepers }, null, 2)
    );
    return zookeeper;
  }