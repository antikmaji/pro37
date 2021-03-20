class Contestant {
    constructor(){
      this.index=null
      this.name=null
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" +this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
    static getcontestantInfo(){
      var contestantInfoRef=database.ref('contestant')
      contestantInfoRef.on("value",(data)=>{
        allcontestants=data.val()
      })
      
    }
  }
  