
export class Time {

    private ms;
    private h;
    private m;
    private s;
    
    
    constructor(h: number, m: number, s: number, ms=0) {
        
        this.h = h;
        this.m = m;
        this.s = s;
        this.ms = ms;

    }



    getH = ()=> {

        return this.h;
    }

    getM = () => {
        return this.m;
    }

    getS = () => {
        return this.s;
    }

    getMs =() => {
        return this.ms;
    }

    getAll =  () => {

        // return {h:this.h, m: this.m, s: this.s};

        return [{type: 'hour', t:this.h},{type: 'minute', t:this.m},{type: 'second', t:this.s}];

    }

    convertToSeconds = () => {

        const h = this.h * 3600000;
        const m = this.m * 60000;
        const s = this.s * 1000;
    
        return (h+m+s);
    
      }

    convertToHMS = () =>{

        const h = Math.round(this.ms/3600000);
        const m = Math.round((this.ms%3600000)/60000);
        const s = Math.round((this.ms - (h*3600000) - (m*60000))/1000);


        return {h:h, m: m, s: s};
        
    }

}