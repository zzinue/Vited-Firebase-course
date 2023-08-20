<script>
  import {useFirestore} from "vuefire"; import{" "}
  {(collection, query, getDocs, onSnapshot)} from "firebase/firestore"; const db
  = useFirestore(); const q = query(collection(db, "cafes")); const
  cafeCollection = ref([]); const querySnapshot = await getDocs(q);
  onSnapshot(q, (querySnapshot) =>{" "}
  {querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    cafeCollection.value.push(doc.data());
    //   console.log("WTf");
  })}
  ); return {};
</script>;
