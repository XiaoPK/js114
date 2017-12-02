const main = require('../main/main');

describe('have a guess', () => {
    it('given number is 1234',function(){
        let number = 1234;
        let result = mian(number);
        if(result = '4A0B'){
            expect(result).toEqual('4A0B');
        }
        if(result = '0A0B'){
            expect(result).toEqual('0A0B');
        }
        if(result = '1A0B'){
            expect(result).toEqual('1A0B');
        }
        if(result = '2A0B'){
            expect(result).toEqual('2A0B');
        }
        if(result = '3A0B'){
            expect(result).toEqual('3A0B');
        }
        if(result = '0A1B'){
            expect(result).toEqual('0A1B');
        }
        if(result = '1A1B'){
            expect(result).toEqual('1A1B');
        }
        if(result = '2A1B'){
            expect(result).toEqual('2A1B');
        }
        if(result = '3A1B'){
            expect(result).toEqual('3A1B');
        }
        if(result = '0A2B'){
            expect(result).toEqual('0A2B');
        }
        if(result = '1A2B'){
            expect(result).toEqual('1A2B');
        }
        if(result = '2A2B'){
            expect(result).toEqual('2A2B');
        }
        if(result = '0A3B'){
            expect(result).toEqual('0A3B');
        }
        if(result = '1A3B'){
            expect(result).toEqual('1A3B');
        }
        if(result = '0A4B'){
            expect(result).toEqual('0A4B');
        }
    });
});