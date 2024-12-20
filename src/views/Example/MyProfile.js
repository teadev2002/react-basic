import React from "react";

const user = {
  name: `The Anh`,
  ImageUrl: `https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/295565043_1405878849899348_1071422485505945009_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5GaAoSDj6BEQ7kNvgGSGojM&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=ANzlG8bmlRlH27canVHRCAg&oh=00_AYCF03kJDsJQcJGuhswSSBcU9gPvQqVQvHYsdZ-a0zaIDw&oe=676B7D68`,
  imageSize: 90,
};
class MyProfile extends React.Component {
  render() {
    return (
      // <> </> giống <div>
      <>
        <h3>{user.name}</h3>
        <img
          className="avatar"
          src={user.ImageUrl}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
      </>
    );
  }
}
export default MyProfile;
