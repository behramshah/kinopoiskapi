const token ='2a04da51-c474-402d-93d7-a24c9ba6c98c';

export const getRate = async () => {
    
    return await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-API-KEY': token,
        }
    }).then(response => response.json())
      .catch(error => console.log('error------>', error));
      
};

