I'm having issues with the promise returned when I fetch the api url 

Somehow, it always returnes an undefined object a few seconds before returning the actual promise object with all the data contained in the API.

Which ends up preventing the app from rendering when I try to access any field after "data" (e.g. data.personal).

It works when I first load the app without calling for anything more than "data" (like if I just type console.log(data)) and then change every call to the specific conditional statements I want to use, without refreshing the page.

Since the data actually has loaded, the logic works and OFF TRACK / ON TRACK show according to the logics manipulating the data.

I inspected my useEffect hook but it doesn't seem to be generating the problem and I didn't want to lose too much valuable time on this problem so I thought I would just a section in the comments to still showcase the work I had done, and to potentially further discuss this during the interview ! 

in the Public information's card track prop 
I would do the following to conditionally render "OFF/ON TRACK":

``
track={
  res
  .data!
  .personal
  .publicInfo
  .courtAndInsolvencies
  .length !== 0 ? "OFF TRACK" : "ON TRACK"}
``

for the Credit utilisation's card track prop, I would probably need a helper
function that could involve a switch :

``

  if (res.data.accounts[0].accountCategory === "credit_cards")
  {
  res.data.accounts[0].overview.balance.amount >= (res.data.accounts[0].overview.limit.amount)/ 2 ? "OFF TRACK" : "ON TRACK"
  }

``
in the Electoral roll's card track prop

``
track={ 
  res
  .data
  .personal
  .electoralRoll[0]
  .current === true ? "ON TRACK" : "OFF TRACK"
}
``

Obviously for the last two I'm hard coding the array item value which is not 
going to work for a larger api. I should loop through the electoralRoll and accounts array to check if the following conditions are met. 