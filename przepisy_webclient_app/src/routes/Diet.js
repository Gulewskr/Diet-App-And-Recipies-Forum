import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Buttons, Recipe, ProfileImagesForm, createRecipeList, DietDay } from "../components";
import {UserContext} from '../data/User';
import {validationPasswordChange, validationRProflieForm} from '../data/Validation'
import { API_ADDRESS } from "../data/API_VARIABLES";

const Diet = (props) => {
 
  const {user, token} = props;

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')

  //const { USER, token } = useContext(UserContext);
  const [data, setData] = useState("");
  const [dataRecipies, setDataRecipies] = useState([]);
  const [recipiesObject, setRecipiesObject] = useState(<></>);

  const {owner, mod, nick, email, type, image, recipeNum, commentNum, avgScore} = useMemo(
    () => {console.log(data); return({
      owner : data !== "" ? data.own === true : false, 
      mod : data !== "" ? data.mod === true : false, 
      nick : data !== "" ? data.name : "null", 
      email : data !== "" ? data.email : "null", 
      type : data !== "" ? data.type : "null", 
      image : data !== "" ? data.image ? data.image : {id : 0, imageURL : ""} : {id : 0, imageURL : ""},
      recipeNum : data !== "" ? data.recipeNum : 0, 
      commentNum : data !== "" ? data.commentNum : 0, 
      avgScore : data !== "" ? data.avgScore != null ? data.avgScore : 0 : 0
    })}, [data]);

  const [editPassword, setEPassword] = useState(undefined);
  const [editProfile, setEProfile] = useState(false);
  const [edit, setEditting] = useState(false);

  const [dropdownisActive, setDropdown] = useState(false);
  const [dietType, setDietType] = useState(0);

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [sex, setSex] = useState(0);
  const [age, setAge] = useState(0);

  const [kcal, setKcal] = useState(0);
  const [fat, setFat] = useState(0);
  const [carb, setCarb] = useState(0);
  const [prot, setProt] = useState(0);

  //ProfileImagesForm
  useEffect(() => {
    refreshData();
  }, [id, token]);

  useEffect(() => {
    setRecipiesObject(createRecipeList( dataRecipies ));
  }, [dataRecipies])

  const refreshData = () => {
    if(id){
      fetch(`${API_ADDRESS}/profile?id=${id}`, {
        method: 'get',
        headers: { 
          'Access-token': token,
          'Content-Type': 'application/json' 
        },
      })
      .then( res => {
        try{
          console.log(res);
          
          return res.json();
        }catch (err){
          console.log(err);
        };
      })
      .then((data) => {
        setData(data);
      })
      .catch(err => {
        console.log(err);
      });

      fetch(`${API_ADDRESS}/profile/recipies?id=${id}`, {
        method: 'get',
        headers: { 
          'Access-token': token,
          'Content-Type': 'application/json' 
        },
      })
      .then( res => {
        try{
          return res.json();
        }catch (err){
          console.log(err);
        };
      })
      .then((d) => {
        console.log(d);
        if(d.error == 0) setDataRecipies(d.data);
        else setDataRecipies(<h1 style={{color: "red"}}>{d.errorMSG}</h1>)
      })
      .catch(err => {
        console.log(err);
      });
    }else{
      console.log("brak id profilu");
    }
  }

  const calculateDiet = ( ) =>
  {
      /*
      Wzór dla kobiet to: BMR = 655 + (9,6 × waga w kg) + (1,8 × wysokość w cm) - (4,7 × wiek w latach) 
      Wzór dla mężczyzn to: BMR = 66 + (13,7 × waga w kg) + (5 × wysokość w cm) - (6,8 × wiek w latach)
      */
    let dietKcal = 0;
    let prot = 2 * weight;
    let protKcla = 2 * weight / 100 * 51.6;
    switch(sex)
    {
        case 0:
            dietKcal = 66 + 13.7 * weight + 5 * height + 6.8 * age;
            break;
        case 1:
            dietKcal = 655 + 9.6 * weight + 1.8 * height + 4.7 * age;
            break;
    }
    switch(dietType)
    {
        case 0: 
            dietKcal += 400
        case 1: 
        case 2: 
        dietKcal -= 400
    }
    setKcal(dietKcal);
    setProt(prot);
    setCarb((dietKcal - protKcla) * 0.7 / 4);
    setFat((dietKcal - protKcla) * 0.3 / 9);
  }

  return (
    <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
      <div className="profileBorder" style={{flexDirection: "column"}}>
        <div style={{marginLeft:"30px"}}>
          <h1>{nick}</h1>
          <h1>email {email}</h1>
          {
            ( owner || mod ) &&
              <div>
                <div id="EditInfoButt" onClick={() => setEditting(true)}> Edytuj dane </div>
                <div id="EditPassButt" onClick={() => setEPassword(true)}> Zmień hasło </div>
              </div>
          }
          
          </div>
      </div>
      <div className="profileBorder" style={{flexDirection: "column"}}>
        <p style={{marginLeft: "30px"}}>Statystyki użytkownika <b>{nick}</b></p>
        <div id="statTable" style={{margin: "10px", marginTop:"0", marginLeft: "30px"}}>
            <div style={{display: "flex", flexDirection: "row"}}><div style={{width:"200px"}}>Liczba przepisów:</div> <div>{recipeNum}</div></div>
            <div style={{display: "flex", flexDirection: "row"}}><div style={{width:"200px"}}>Średnia ocena:</div>    <div>{avgScore}</div></div>
            <div style={{display: "flex", flexDirection: "row"}}><div style={{width:"200px"}}>Liczba komentarzy:</div><div>{commentNum}</div></div>
            <div style={{display: "flex", flexDirection: "row"}}><div style={{width:"200px"}}>Status:</div>           <div>{type}</div></div>
        </div>
      </div>
      <div class="container">
        <div className="columns">
            <div className="column">
                <span className="is-midle">
                 Rodzaj diety
                </span>
            </div>
            <div className="column">
                <div class="select is-primary">
                    <select>
                        <option onClick={() => setDietType(0)} >Przybierz na masie</option>
                        <option onClick={() => setDietType(1)} >Zachowaj masę</option>
                        <option onClick={() => setDietType(2)} >Schudnij</option>
                    </select>
                </div>
            </div>
            <div className="column">
                <input class="input is-normal" type="number" placeholder="Waga (kg)" onChange={e => {setWeight(e.target.value)}}></input>
            </div>
            <div className="column">
                <input class="input is-normal" type="number" placeholder="Wzrost (cm)" onChange={e => {setHeight(e.target.value)}}></input>
            </div>
            <div className="column">
                <input class="input is-normal" type="number" placeholder="Wiek" onChange={e => {setAge(e.target.value)}}></input>
            </div>
            <div className="column">
                <div class="select is-primary">
                    <select>
                        <option onClick={() => setSex(0)} >Mężczyzna</option>
                        <option onClick={() => setSex(1)} >Kobieta</option>
                    </select>
                </div>
            </div>
            <div className="column">
                <button class="button is-primary" onClick={() => calculateDiet()}>Zapisz</button>
            </div>
        </div>
            <DietDay kcal={kcal} fat={fat} protein={prot} carbon={carb} />
        </div>
    </div>
  );
}

export default Diet;