# try_tf_serving

```
├───dataset
│   ├───testing
│   │   ├───paper
│   │   ├───rock
│   │   └───scissors
│   └───training
│       ├───paper
│       ├───rock
│       └───scissors
├───images
├───models
    └───rps_model
        └───1
            ├───assets
            └───variables
```

```
{
 "model_version_status": [
  {
   "version": "1",
   "state": "AVAILABLE",
   "status": {
    "error_code": "OK",
    "error_message": ""
   }
  }
 ]
}
```

```
docker run -it --rm -v C:\Users\dicoding\Documents\Dicoding\a185-pengembangan-ml\sample_project_tfserving\solution\models:/models -p 8501:8501 --entrypoint /bin/bash tensorflow/serving

tensorflow_model_server --rest_api_port=8501 --model_name=rps_model --model_base_path=/models/rps_model/

http://localhost:8501/v1/models/rps_model
```
