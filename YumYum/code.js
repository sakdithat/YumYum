var i ;
var numid;

function AddDay(strDate,intNum)
{
	sdate =  new Date(strDate);
	sdate.setDate(sdate.getDate()+intNum);
	return sdate.getMonth()+1 + "-" + sdate.getDate() + "-" + sdate.getFullYear();
}
setText('text2',AddDay(Date(),+0));
setText('text3',AddDay(Date(),+3));

//--index01--
  onEvent("login1", "click", function(event) {
    console.log("login1 clicked!");
    setScreen("home01");
    
  });
//--End index01--
//--home01--
  onEvent("out", "click", function(event) {
    console.log("out clicked!");
    setScreen("a01");
  });
  onEvent("borrow", "click", function(event) {
    console.log("borrow clicked!");
    setText('dd1','** โปรดเลือกสิ่งของ...');
    setText('text1','');
    setText('text4','');
    setScreen("b01");
  });
  onEvent("button4", "click", function(event) {
  console.log("button4 clicked!");
    setText('t1','');
    setText('t2','--');
    setText('t3','');
    setText('t4','');
    setText('t5','');
    setText('l1','--');
  setScreen("sl01");
  });
//--End home01--
//--b01--
  //--back--
    onEvent("back01", "click", function(event) {
      console.log("back01 clicked!");
      setScreen("home01");
    });
  //--End back--
  //--b2--
    onEvent("b2", "click", function(event) 
    {
      console.log("b2 clicked!");
      var favFoodData={};
        favFoodData.type = getText("dd1");
        favFoodData.number = getNumber("text1");
        favFoodData.day1 = getText("text2");
        favFoodData.day2 = getText("text3");
        favFoodData.psu = getText("text4");
        if(favFoodData.psu !== '' && favFoodData.number !== '' && favFoodData.day1 !== '' && favFoodData.day2 !== '' && favFoodData.psu!== ''){
        createRecord("list", favFoodData, function(record) 
          {
            console.log("type" + record.type + "number" + record.number + "day1" + record.day1 + "day2" + record.day2 + "psu" + record.psu );
            setScreen("w01");
          })
        }
        else{setScreen("w02")};
    });
  //--End b2--
//--End b01--
//--w01--
  onEvent("button1", "click", function(event) {
    console.log("button1 clicked!");
    setScreen("home01");
  });
//--End w01--
//--w02--
  //--ย้อนกลับ--
    onEvent("button2", "click", function(event) {
      console.log("button2 clicked!");
      setScreen("b01");
    });
  //--End ย้อนกลับ--
  //--ยกเลิก--
    onEvent("button3", "click", function(event) {
      console.log("button3 clicked!");
      setScreen("home01");
    });
  //--End ยกเลิก--
//--End w02--
//--sl01--
  //--ค้นหา--
  onEvent("button5", "click", function(event) {
    console.log("button5 clicked!");
    var psu = getText("t1");
    readRecords("list", {psu:psu}, function(records)
    {
       for (i=0; i < records.length; i++)
       {
        setText('t2',records[i].type);
        setText('t3',records[i].day1);
        setText('t4',records[i].day2);
        setText('t5',records[i].number);
        setText('l1',records[i].id);
        numid=records[i].id;
       }
    });

  });
  //--จบ ค้นหา--
  //--แก้ไข--
    onEvent("button7", "click", function(event) {
      console.log("button7 clicked!");
      var favFoodData={};
        favFoodData.type = getText("t2");
        favFoodData.number = getNumber("t5");
        favFoodData.day1 = getText("t3");
        favFoodData.day2 = getText("t4");
        favFoodData.psu = getText("t1");
      updateRecord("list", {id:numid, type:favFoodData.type , number:favFoodData.number , day1:favFoodData.day1 , day2:favFoodData.day2 , psu:favFoodData.psu}, 
      function(record, success) {
        if (success) {
      console.log("Record updated with id:" + numid);
      setScreen("w01");
    }
    else {
      console.log("No record to update with id:" + numid);
    }  
      })
    });
  //--End แก้ไข--
  //--ลบ--
    onEvent("button8", "click", function(event) {
    console.log("button8 clicked!");
      deleteRecord("list", {id:numid}, function(success) {
        if (success) {
      console.log("Record delete with id:" + numid);
      setScreen("w01");
    }
    else {
      console.log("No record to delete with id:" + numid);
    } 
    });
  });
  //--End ลบ--
  //--กลับ--
    onEvent("button6", "click", function(event) {
    console.log("button6 clicked!");
    setScreen("home01");
    });
  //--End กลับ--
//--End sl01--

