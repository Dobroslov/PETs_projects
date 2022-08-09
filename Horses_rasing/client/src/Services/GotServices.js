export default class GotServices { 

  getResource = async (url) => {
    const result = await fetch(`${url}`);

    if (!result.ok) {
      throw new Error(`COULD NOT FETCH ${url}, status:${result.status}`);
    }
    
    return await result.json();
  };  
}
