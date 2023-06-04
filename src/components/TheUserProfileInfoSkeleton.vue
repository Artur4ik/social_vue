<template>
  <div class="card">
    <div class="user-info">
      <div class="user-avatar pulsate rounded-circle"></div>
      <div class="user-panel">
        <div class="user-name pulsate"></div>
        <div class="user-location">
          <div class="user-location-text pulsate"></div>
          <div class="user-location-image pulsate"></div>
        </div>
        <div class="user-statistic">
          <div class="user-statistic-item pulsate">

          </div>
          <div class="user-statistic-item pulsate">

          </div>
          <div class="user-statistic-item pulsate">

          </div>
        </div>
      </div>
    </div>
    <div class="user-bio pulsate">

    </div>
  </div>
</template>

<style scoped>
.user-name {
  display:block;
  width:130px;
  height:20px;
  color:black;
  border-radius: 3px;
  margin-bottom: 8px;
}
.card {
  margin-top: 10px;
}
.user-bio {
  display:block;
  width: 570px;
  height: 50px;
  color:black;
  border-radius: 3px;
  margin-bottom: 15px;
  margin-left: 15px;
}
.user-statistic-item {
  margin-right: 10px;
  display:block;
  width:80px;
  height:16px;
  color:black;
  border-radius: 3px;
}
.user-statistic {
  display: flex;
  font-size: 15px;
}
.user-location {
  display: flex;
  margin-bottom: 8px;
}
.user-location-text {
  display:block;
  width:130px;
  height:16px;
  color:black;
  border-radius: 3px;
}
.user-location-image {
  display:block;
  width:16px;
  height:16px;
  color:black;
  border-radius: 3px;
  margin-left: 5px;
}
.sex-image {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}
.user-name-link {
  background: linear-gradient(135deg, #ff4a4a, #3c7aff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.user-info {
  display: flex;
  flex-direction: row;
  padding: 15px;
}
.user-avatar {
  display:block;
  width:100px;
  height:100px;
  color:black;
}
.user-avatar {
  display: block;
}
.user-panel {
  padding: 0 20px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pulsate{
  background: linear-gradient(-45deg, #DDDDDD, #F0F0F0, #DDDDDD, #F0F0F0);
	background-size: 400% 400%;
	-webkit-animation: Gradient 2.25s ease infinite;
	-moz-animation: Gradient 2.25s ease infinite;
	animation: Gradient 2.25s ease infinite;
}

@-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}
</style>
