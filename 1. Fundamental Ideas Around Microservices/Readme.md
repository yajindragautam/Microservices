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


- ASYNC <br>
These words do't mean what they mean in the Javascript World.
![image](https://user-images.githubusercontent.com/58351637/198952957-1940cfe0-6832-4c63-86fe-5d29b50ca53e.png)

- NOT THE BEST WAY 
![image](https://user-images.githubusercontent.com/58351637/198958904-d75d1bf2-c347-4faf-b56f-48e42b24dc03.png)

In this aproach Service D emmit an event to get `product order by a particular user`. This event hit an event Bus. Event bust create a copy to it and request to Server A to get user id of 1. Service A again emmit an event with data of requested user and send it back to Event Bus. Then event bus send that data to Service D and this process keep runing until final result comes. But this approach is not the best. It hace a lot of cons which is described below.

### PROS AND CONS OF THIS APPROACH
![image](https://user-images.githubusercontent.com/58351637/198960091-c1aab8b0-15cf-4196-8c44-df6b103b9662.png)

### BEST ASYNC APPROACH
![image](https://user-images.githubusercontent.com/58351637/198960650-147b4fdb-86e0-44a7-88e4-5bd71e7353e9.png)

### let's Refine the exact goal of this service.
![image](https://user-images.githubusercontent.com/58351637/198965182-4ba08b33-d917-4f17-9b68-9ae6a42d6ef3.png)

### After Refined
![image](https://user-images.githubusercontent.com/58351637/198965424-d7ce2504-bbb6-4761-abd2-e1b8282082fd.png)

For this we have to create a seperate database whih required data.

![image](https://user-images.githubusercontent.com/58351637/198965774-ee8c9e94-b871-4f8c-aad5-28a8be6d2074.png)

### How this approach works
![image](https://user-images.githubusercontent.com/58351637/198967187-b5504593-9d84-4455-8e8d-7bedbf490d96.png)

- When request to create a new product comes. Service B (prodict service ) create a prodict and emmit and event to an Event Bus where Event Bus take that data and create send it to Service D. Then service D store only required data like as `id, name, image` and store it in it' Product Databse.

- When new user is created and this perocess again repeats. 

- Now Service D have both `product` and `user` data. Which maekes it independance.

## Pros and Cons Of this method
![image](https://user-images.githubusercontent.com/58351637/198969004-1ef1ccdb-3420-4e80-9a79-4b64a1d4da0f.png)

