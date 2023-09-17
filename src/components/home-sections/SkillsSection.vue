<template>
    <section class="skills">
        <h2>Skills & Tools</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, incidunt? testRepellat, incidunt? test</p>
        <div class="skills-container">
            <h3>Skills</h3>
            <div class="list">
                <div class="tag">Semantic HTML5</div>
                <div class="tag">Responsive CSS3</div>
                <div class="tag">JavaScript</div>
                <div class="tag">Typescript</div>
                <div class="tag">JSX</div>
                <div class="tag">Sass</div>
                <div class="tag">git</div>
                <div class="tag">Vue</div>
                <div class="tag">React</div>
                <div class="tag">State Management</div>
                <div class="tag">Debugging</div>
                <div class="tag">Validation</div>
                <div class="tag">APIs</div>
            </div>
        </div>
        <div class="tools-container">
            <h3>Tools</h3>
            <div class="list">
                <div class="tag">Github</div>
                <div class="tag">Bitbucket</div>
                <div class="tag">Slack</div>
                <div class="tag">Jira</div>
                <div class="tag">Adobe XD</div>
                <div class="tag">Communication</div>
                <div class="tag">Google</div>
                <div class="tag">Stack Overflow</div>
                <div class="tag">Documentation</div>
                <div class="tag">Monday</div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.skills {
    width: 80%;
    height: 80vh;
    margin: 0 auto;

    h2 {
        font-weight: 300;
    }

    h3 {
        font-size: rem(30);
        width: 50px;
        padding: 15px;
        font-weight: 500;
        background-image: linear-gradient(to right bottom, rgb(209, 40, 231), rgb(63, 3, 78));
        text-transform: uppercase;
        line-height: 1;
        word-break: break-all;
        -ms-word-break: break-all;
    }
    
    p {
        max-width: 500px;
        margin: 0 auto;
        font-weight: 300;
    }

    .tag {
        font-size: rem(14);
        padding: 5px 15px;
        border: 1px solid $lightest-neutral;
        border-radius: 50px;
        margin-top: 20px;
        margin: 20px 5px 0;
        transition: all 0.2s ease;

        &:hover {
            background-color: $lightest-neutral;
            color: $darkest-neutral;
        }
    }

    .skills-container,
    .tools-container {
        display: flex;
        align-items: center;
        max-width: 35vw;
        margin-top: 25px;

        .list {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            margin-left: 15px;
            padding-bottom: 15px;
        }
    }

    .tools-container {
        flex-direction: row-reverse;
        margin-left: auto;

        .list {
            flex-direction: row-reverse;
            margin: 0 15px 0 0;
        }
    }
}
</style>