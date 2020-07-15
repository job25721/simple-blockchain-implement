import BlockChain from "./blockChain";
import Block from "./block";
const polyChain = new BlockChain();

for (let i = 0; i < 5; i++) {
  polyChain.addNewBlock(
    new Block({
      sender: "job",
      reciever: "nice",
      message: "ดูธรรมะธรรมโมบ้างดิ๊",
    })
  );
}

// print;
polyChain.chain.forEach((block) => {
  console.log(block);
});

//validate
polyChain.isChainValid();

//แก้ไขข้อมูลบางอย่าง
polyChain.chain[0].data = 'hacked'

//print
polyChain.chain.forEach((block) => {
  console.log(block);
});

//validate
polyChain.isChainValid();
