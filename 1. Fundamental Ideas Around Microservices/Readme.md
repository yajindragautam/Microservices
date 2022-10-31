# 1. Fundamental Ideas Around Microservices

## Introduction

Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs.

## Monolithic Server Architecture

![image](https://user-images.githubusercontent.com/58351637/198939192-8a7ecea6-aa2d-49f5-bd39-9a6a2d6b9b32.png)

## Monolithic Container

![image](https://user-images.githubusercontent.com/58351637/198939431-f0e4bc4d-8436-4377-a01b-518696a6efbb.png)

## Micro Service Architure
![image](https://user-images.githubusercontent.com/58351637/198949088-f8da7b4d-9e5e-43a2-ba05-f28fe42a8901.png)


## Micro Container
![image](https://user-images.githubusercontent.com/58351637/198948865-ae51ee77-f06f-4de9-a9f9-e406ba397a92.png)

# So. What's the big challenge with microservices ?
![image](https://user-images.githubusercontent.com/58351637/198949839-b7daada5-90a1-4bc0-954b-a43b2235f6ff.png)

With microservices, we store and access data in sort of strange way.
Let's look at
- How we store data
![image](https://user-images.githubusercontent.com/58351637/198950620-da383649-a4df-4a3e-b885-9aba59becd15.png)

- how we access data

![image](https://user-images.githubusercontent.com/58351637/198950758-4dda0502-0433-433c-9d39-210d8c65ef2f.png)

- Each service gets it's own database(if it needs one)

- Service will never, ever reach into another services databse.

## Ok but why ?
![image](https://user-images.githubusercontent.com/58351637/198951584-96dbb7fe-3268-4311-b686-3f32f18a9d10.png)

## Communication Between Different Services
- SYNC
![image](https://user-images.githubusercontent.com/58351637/198953406-a2497878-4c62-40e8-9d12-278dc01f1824.png)

Pros Of Using SYNC 
- Conceptually easy to underatand !
- Service D won't need a database

Cons Of Using SYNC 
- Intruces a dependeny between services.
- If ant inter-service request fails, the overall request fails.
- The entire request is only as fast as the slowest request.
- Can easily introduce web of request.
![image](https://user-images.githubusercontent.com/58351637/198955085-1348b60d-9727-4975-abf3-a3c2c391e8e7.png)


- ASYBC <br>
These words do't mean what they mean in the Javascript World.
![image](https://user-images.githubusercontent.com/58351637/198952957-1940cfe0-6832-4c63-86fe-5d29b50ca53e.png)
