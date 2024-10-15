<template>
  <main class="py-16">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold mb-8">Contact Me</h1>
      <div class="max-w-2xl mx-auto">
        <FormKit type="form" @submit="handleSubmit">
          <FormKit
            type="text"
            name="name"
            label="Name"
            validation="required"
          />
          <FormKit
            type="email"
            name="email"
            label="Email"
            validation="required|email"
          />
          <FormKit
            type="textarea"
            name="message"
            label="Message"
            validation="required|length:10"
          />
          <FormKit type="submit" label="Send Message" />
        </FormKit>
      </div>
    </div>
  </main>
</template>

<script setup>
const handleSubmit = async (formData) => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', formData);
  // You can add your form submission logic here
};
</script>