const app = require('./operations');

describe('Calculator functions', () => {
    it('test addition', () => {
        const { statusCode, result, error } = app.addition(2,5);
        expect(result||error).toBe(7);     
        expect(statusCode).toBe(200);       
    });

    it('test difference', () => {
        const { statusCode, result, error } = app.difference(2,5);
        expect(result||error).toBe(-3);     
        expect(statusCode).toBe(200);       
    });

    it('test multiplication', () => {
        const { statusCode, result, error } = app.multiplication(2,5);
        expect(result||error).toBe(10);  
        expect(statusCode).toBe(200);          
    });

    it('test division', () => {
        const { statusCode, result, error } = app.division(100,"5");
        expect(result||error).toBe(20);   
        expect(statusCode).toBe(200);         
    });

    it('test power', () => {
        const { statusCode, result, error } = app.power("5","2");
        expect(result||error).toBe(25); 
        expect(statusCode).toBe(200);            
    });

    it('test percent', () => {
        const { statusCode, result, error } = app.percent("80","50");
        expect(result||error).toBe(40);    
        expect(statusCode).toBe(200);        
    });

    it('test sinus', () => {
        const { statusCode, result, error } = app.sinus("30","deg");
        expect(result||error).toBe(0.49999999999999994);    
        expect(statusCode).toBe(200);        
    });

    it('test cosinus', () => {
        const { statusCode, result, error } = app.cosinus("60","deg");
        expect(result||error).toBe(0.5000000000000001);    
        expect(statusCode).toBe(200);        
    });

    it('test tangens', () => {
        const { statusCode, result, error } = app.tangens("45","deg");
        expect(result||error).toBe(0.9999999999999999);    
        expect(statusCode).toBe(200);        
    });

    it('test cotangens', () => {
        const { statusCode, result, error } = app.cotangens("45","deg");
        expect(result||error).toBe(1.0000000000000002);    
        expect(statusCode).toBe(200);        
    });

    it('test sqrt', () => {
        const { statusCode, result, error } = app.sqrt("49");
        expect(result||error).toBe(7);    
        expect(statusCode).toBe(200);        
    });
});