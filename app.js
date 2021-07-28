.layout {
  position: absolute;
  width: 500px;
  height: 650px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 150px repeat(5, 1fr);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  padding: 0.5%;
  grid-gap: 5px;
}

.output-area {
  grid-column: 1/-1;
  background-color: #526780;
  color: aliceblue;
  text-align: end;
  padding: 10px;
}

.btn {
  background-color: whitesmoke;
  border: 0;
  font-size: 2rem;
  font-weight: bolder;
  cursor: pointer;
}

.btn-op {
  background-color: teal;
}


.btn:hover {
  background-color: cornsilk;
}

.btn-op:hover{
  background-color: sienna;
}
#clear {
  grid-column: span 2;
}

#compute {
  grid-column: span 2;
}

#prev {
  height: 60%;
  font-size: 2rem;
  font-weight: bold;
}

#curr {
  height: 40%;
  font-size: 2.5rem;
}
