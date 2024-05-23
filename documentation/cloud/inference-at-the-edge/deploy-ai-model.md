---
title: deploy-ai-model
displayName: Deploy an AI model
order: 10
published: true
toc: 
--1--Step 1. Deploy a custom model: "step-1-deploy-a-custom-model"
--1--Step 2. Select a flavor: "step-2-select-a-flavor"
--1--Step 3. Set up routing placement: "step-3-set-up-routing-placement"
--1--Step 4. Configure autoscaling: "step-4-configure-autoscaling"
--1--Step 5 (Optional). Add environment variables: "step-5-optional-add-environment-variables"
--1--Step 6 (Optional). Configure authentication via API keys: "step-6-optional-configure-authentication-via-api-keys"
--1--Step 7. Specify pod lifetime: "step-7-specify-pod-lifetime"
--1--Step 8. Enter deployment details: "step-8-enter-deployment-details"
--1--Step 9. Finalize deployment: "step-9-finalize-deployment"
pageTitle: Deploy an AI model | Gcore
pageDescription: Learn how to deploy an AI model by uploading your custom model or using one of the preconfigured models from the model catalog.
---
# Deploy an AI model

With Gcore Inference at the Edge, you can deploy a custom AI model by uploading it from your model registry.  

<alert-element type="info" title="Info">
 
The feature is in beta testing and available for free. To enable the product for your account, contact <a href="mailto:support@gcore.com" target="_blank">our technical support</a> or your account manager. 
 
</alert-element>

## Step 1. Deploy a custom model 

1\. In the Gcore Customer Portal, navigate to **Cloud** > **Inference at the Edge**. 

2\. Click **Overview**.  

3\. Click **Deploy custom model**.

<img src="https://assets.gcore.pro/docs/cloud/inference-at-the-edge/deploy-ai-model/overview-deploy-custom-model.png" alt="Overview tab with model catalog and custom model sections" width="80%">

4\. In the **Registry** dropdown, select the storage location of your AI model. 

<img src="https://assets.gcore.pro/docs/cloud/inference-at-the-edge/deploy-ai-model/registry-dropdown.png" alt="Deploy a model dialog with highlighted registry section" width="80%">

If you need to add a new model registry, click Add registry and then configure it as follows: 

* **Image registry name**: Registry name that will be displayed in the Registry dropdown. 

* **Image registry URL**: Link to the location where your AI model is stored. 

* **Image registry username**: Username you use to access the storage location of your AI model. 

* **Image registry password**: Password you use to access the storage location of your AI model. 

To save the new registry, click **Add**.

5\. Enter the name of the image with your model. For example, `ghcr.io/namespace/image_name:tag` or `docker.io/username/model:tag`.  

6\. Specify a port that a containerized model will listen to. The external port for accessing your deployment is always 443 (HTTPS).

<img src="https://assets.gcore.pro/docs/cloud/inference-at-the-edge/deploy-ai-model/image-name-port.png" alt="Image name and port sections" width="80%">

## Step 2. Select a flavor 

This configuration determines the allocated number of resources (GPU/vCPU/RAM) for running your model. Ensure that you select sufficient resources. Otherwise, the model deployment might fail.  

<img src="https://assets.gcore.pro/docs/cloud/inference-at-the-edge/deploy-ai-model/select-flavor.png" alt="Flavor dropdown in the Pod configuration section" width="80%">

Recommended flavor parameters for models: 

<table>
<thead>
  <tr>
    <th>Recommended flavor</th>
    <th>Billion parameters</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1 × L40s 48 GB</td>
    <td>4.1–21</td>
  </tr>
    <tr>
    <td>2 × L40s 48 GB</td>
    <td>4.1–21</td>
  </tr>
      <tr>
    <td>4 × L40s 48 GB</td>
    <td>4.1–21</td>
  </tr>
</tbody>
</table>

## Step 3. Set up routing placement 

Select Inference regions where the model will run among available worldwide locations. Consider that the list of regions depends on the availability of the selected pod configuration in Step 2.

<img src="https://assets.gcore.pro/docs/cloud/inference-at-the-edge/deploy-ai-model/routing-placement.png" alt="Regions dropdown in the Routing placement section" width="80%">

## Step 4. Configure autoscaling 

You can set up autoscaling for all pods (**All selected regions**) or only for pods located in particular regions (**Custom**).   

Specify the range of nodes you want to maintain: 

* **Minimum pods**: the minimum number of pods that must be deployed during a low load period.  

* **Maximum pods**: the maximum number of pods that can be added during an increased load period. 

<img src="https://assets.gcore.pro/docs/cloud/inference-at-the-edge/deploy-ai-model/autoscaling.png" alt="Autoscaling section" width="80%">

## Step 5 (Optional). Add environment variables 

If you want to add additional information to your model deployment, create variables for your container in the format of key-value pairs. These variables will only be used in the environment of the created container. 

<img src="https://assets.gcore.pro/docs/cloud/inference-at-the-edge/deploy-ai-model/env-variables.png" alt="Environment variables section" width="80%">

## Step 6 (Optional). Configure authentication via API keys  

You can configure an API authentication for your deployment. Turn on the Enable API Key authentication toggle to view the authentication settings. 

<img src="https://assets.gcore.pro/docs/cloud/inference-at-the-edge/deploy-ai-model/api-keys.png" alt="API keys section with enabled toggle" width="80%">

<alert-element type="tip" title="Tip">
 
A single deployment can have multiple API keys, and the same API key can be attached to multiple deployments.
 
</alert-element>

You can choose one of the following options: 

* **Select API keys**: add one or more keys that are already stored in the Gcore Customer Portal by selecting them from the dropdown list. 

* **Create new API key**: generate a new key right there. 

To generate a key right there, select the **Create new API key** link: 

1\. In a new dialog that opens, enter the key name to identify the key in the system. 

2\. (Optional) Add a key description to give more context about the key and its usage. 

3\. As a security measure, you can specify the key expiration date. If you don’t want to regenerate the key and keep it indefinitely, select **Never expire**. 

4\. Click **Create** to generate the key. 

<img src="https://assets.gcore.pro/docs/cloud/inference-at-the-edge/deploy-ai-model/create-api-key.png" alt="Create API key dialog with annotated steps" width="80%">

After you generate the key, it will appear in the API Keys dropdown, and you can select it to authenticate to the deployment.  

## Step 7. Specify pod lifetime 

Specify the number of seconds after which a pod will be deleted when there are no requests to your pod. For example, if you enter 600, the pod will be deleted in 600 seconds—equal to ten minutes. 

<alert-element type="info" title="Info">
 
If you specify 0, the container will take approximately one minute to scale down. 
 
</alert-element>

<img src="https://assets.gcore.pro/docs/cloud/inference-at-the-edge/deploy-ai-model/pod-lifetime.png" alt="Pod lifetime section" width="80%">

## Step 8. Enter deployment details 

Enter the deployment name and additional information if needed. This information will be displayed in the settings on the **Deployments** page.   

<img src="https://assets.gcore.pro/docs/cloud/inference-at-the-edge/deploy-ai-model/deployment-details.png" alt="Deployment details section" width="80%">

## Step 9. Finalize deployment 

Scroll the page up and click **Deploy** in the top-right corner of the screen. 

<img src="https://assets.gcore.pro/docs/cloud/inference-at-the-edge/deploy-ai-model/click-deploy.png" alt="Your plan section with an active Deploy button" width="80%">  