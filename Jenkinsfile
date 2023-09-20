node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'docker-id') {

        def customImage = docker.build("sufiyann9/mynodeapp")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}