interface IProfile
{
    name:string;
    age:number;
}

function Profile({name}:IProfile) {

  return (
    <div>
      <h1>About Page {name}</h1>
      <p>This is the About page.</p>
    </div>
  );
}

export default Profile;