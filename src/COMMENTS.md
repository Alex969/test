

``
in the Electoral roll's card track prop

``
track={ 
  customerData
  .personal
  .electoralRoll[i]
  .current === true ? "ON TRACK" : "OFF TRACK"
}
``

Obviously for the last two I'm hard coding the array item value which is not 
going to work for a larger api. I should loop through the electoralRoll and accounts array to check if the following conditions are met. 