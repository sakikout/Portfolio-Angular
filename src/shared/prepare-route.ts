
export class Animated {

prepareRoute(outlet : any) {
    try {
        return outlet 
            && outlet.activatedRouteData 
            && outlet.activatedRouteData['animation'];
            
    } catch (e : unknown) {
        throw new Error(`ERROR: ${e}`);
    }
    
  }

}

