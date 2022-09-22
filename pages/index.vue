<template>
    <div class="main-page-photo">
        <nuxt-img format="webp" sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw" src="/homePage/homePagePhoto.png" alt="Matteo's Photo" style="width: 90%;" class="main-page-central-photo" id="main-page-central-photo" onload="enterMainPage();" />
        <h1 class="main-page-name" id="main-page-central-name">
            MATTEO DELL'ACQUA
        </h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "IndexPage"
            }
        },
        head() {
            return {
                title: "Matteo Dell'Acqua",
                script: [
                    {src: "/js/index_js_inject.js", pbody: true}
                ]
            }
        }
    }
</script>

<style>
.main-page-photo {
    position: relative;
}

.main-page-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(3vw);
    opacity: 0;
    font-size: 3vw;
}

.main-page-central-photo {
  transform: translateX(-3vw);
  opacity: 0;
}

@keyframes mainImageEntrance {
	0% {
		opacity: 0;
		transform: translateX(-3vw);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes mainNameEntrance {
	0% {
		opacity: 0;
		transform: translateX(3vw);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

.main-page-central-photo.enter {
  animation: mainImageEntrance 1s ease-out 0s 1 normal forwards;
}

.main-page-name.enter {
  animation: mainNameEntrance 1s ease-out 0s 1 normal forwards;
}
</style>
