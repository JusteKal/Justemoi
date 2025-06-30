<template>
    <section>
        <div class="contact-page">
           <div class="contact-content">
            <h1>{{ $t('contactme') }}</h1>
            <p>{{ $t('contactme2') }}<a href="mailto:contact.@justekal.be">contact.@justekal.be</a>.</p>
           </div>
        </div>
    </section>
        
</template>

<script lang="ts" setup>

</script>

<style>


.contact-page {
min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #222;
    background-size: cover;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
}

.contact-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #2F2F2F;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
    padding: 40px;
    border-radius: 10px;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
}
.contact-content h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
}
.contact-content p {
    font-size: 1.3em;
    text-align: center;
}
.contact-page a {
    color: #76c7f4;
    text-decoration: none;
    transition: color 0.3s ease;
}
.contact-page a:hover {
    color: #4a90e2;
}

</style>