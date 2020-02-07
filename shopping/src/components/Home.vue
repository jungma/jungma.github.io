<template>
   <div class="container text-center mt-5">
    <div class="col-md-6">
      <b-card
        title="Card Title"
        img-src="원룸들.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{원룸들.title}}
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>

    </div>
  </div> 

</template>

<script>
export default {
    props : {
        원룸들 : Object, 
    }
}
</script>

<style>

</style>