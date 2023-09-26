<script setup lang="ts"></script>

<template>
    <footer class="footer">
        <div class="footer-links">
            <h3>Let's Connect!</h3>
            <div class="icons">
                <a href="https://google.com" class="social-icon" target="_blank">
                    <font-awesome-icon class="fa-icon" icon="fa-solid fa-envelope" />
                </a>
                <a href="https://google.com" class="social-icon" target="_blank">
                    <font-awesome-icon class="fa-icon" icon="fa-brands fa-github" />
                </a>
                <a href="https://google.com" class="social-icon" target="_blank">
                    <font-awesome-icon class="fa-icon" icon="fa-brands fa-linkedin-in" />
                </a>
            </div>
        </div>
        <div class="more-about-me">
            <h2>Thank You Very Much for Visiting My Portfolio</h2>
            <div class="footer-section">
                <p>I have high hopes that I've displayed enough information about myself that interest you enough to reach out. It'd be great to see if I'd be a good fit in your work environment. A little more about me is that I really enjoy spending my time learning, especially when it comes to game development. I study web developement every day while at work, and I spend a lot of my free time on hobbies like 3D sculpting, animating, and game development. I primarily use Blender to create my game assets before importing them over to the Unity game engine where I program in C#.</p>
                <img src="@/assets/images/crimson_ronin.jpg" />
            </div>
            <div class="footer-section">
                <div class="blender-model">
                    <img src="@/assets/images/mid_poly_model.jpg" />
                </div>
                <ol>
                    <p>My current process is as follows:</p>
                    <li>Sculpt something</li>
                    <li>Retopologize the sculpt for optimal performance</li>
                    <li>Rig the retopologized model</li>
                    <li>Weight paint the model</li>
                    <li>Paint the model!</li>
                    <li>Animate it to give it some life!</li>
                    <li>Import the model into Unity</li>
                    <li>Start programming!</li>
                </ol>
            </div>
            <div class="footer-section">
                <p>Web & Game development have been my main interests for a while now. If you're interested, I'd be glad to share and learn more about each other. Thank you!</p>
                <img src="@/assets/images/fish_model.jpg" />
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background-color: #3A3A3A;
    padding-bottom: 30px;

    &-links {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 30px;
        background-color: rgb(36, 36, 36);

        h3 {
            font-size: rem(24);
        }

        .icons {
            margin-left: 10px;

            svg {
                margin: 0 5px;
                vertical-align: middle;
                transition: all 0.2s ease;

                &:hover {
                    color: #ff70e0;
                }
            }
        }
    }

    .more-about-me {
        padding: 30px 0;
        
        h2 {
            font-size: rem(30);
            font-weight: 300;
            margin-bottom: 50px;
            padding: 0 30px;
            line-height: 1.2;
        }

        .footer-section {
            width: 80%;
            margin: 15px auto;
            max-width: 1400px;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            text-align: left;
            
            @include bp-lg-laptop {
                flex-direction: row;
                justify-content: space-between;
                width: 90%;
            }

            @include bp-xl-desktop {
                margin: 0 auto;
            }

            &:nth-child(3) {
                flex-direction: column;

                @include bp-lg-laptop {
                    flex-direction: row;
                }
            }

            ol {
                margin-left: 20px;

                @include bp-sm-phone-landscape {
                    margin-left: 0;
                }

                p {
                    width: 100%;
                    font-size: rem(18);
                    margin-left: -15px;
                    line-height: 1.3;
                    margin-bottom: 5px;
                    
                    @include bp-sm-phone-landscape {
                        font-size: rem(20);
                        margin-bottom: 0;
                    }
                }
            }

            p {
                width: 100%;
                font-size: rem(16);
                margin-top: 20px;
                
                @include bp-sm-phone-landscape {
                    font-size: rem(18);
                }

                @include bp-lg-laptop {
                    width: 50%;
                    margin-top: unset;
                }
                
                @include bp-xl-desktop {
                    width: 40%;
                }
            }

            img,
            .blender-model {
                width:  100%;

                @include bp-lg-laptop {
                    width: 40%;
                }
            }

            img:nth-child(1) {
                display: block;
                width: 60%;
                max-width: 300px;
                margin: 0 auto;

                @include bp-lg-laptop {
                    width: 50%;
                    margin: unset;
                }
            }
        }
    }
}
</style>