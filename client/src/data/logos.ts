// Telecom provider logos mapping
export const providerLogos = {
  // Major ISPs
  "xfinity": "/logos/xfinity-logo.svg",
  "comcast": "/logos/xfinity-logo.svg",
  "spectrum": "/logos/spectrum-logo.svg",
  "charter": "/logos/spectrum-logo.svg",
  "optimum": "/logos/optimum-logo.svg",
  "altice": "/logos/optimum-logo.svg",
  "directv": "/logos/directv-logo.svg",
  "dish": "/logos/dish-logo.svg",
  "viasat": "/logos/viasat-logo.svg",
  "earthlink": "/logos/earthlink-logo.svg",
  "hughesnet": "/logos/hughesnet-logo.svg",
  
  // Provider display names (for UI)
  "xfinityDisplayName": "Xfinity",
  "comcastDisplayName": "Xfinity",
  "spectrumDisplayName": "Spectrum",
  "charterDisplayName": "Spectrum", 
  "optimumDisplayName": "Optimum",
  "alticeDisplayName": "Optimum",
  "directvDisplayName": "DIRECTV",
  "dishDisplayName": "DISH Network",
  "viasatDisplayName": "Viasat",
  "earthlinkDisplayName": "Earthlink",
  "hughesnetDisplayName": "HughesNet",
};

// Provider type (cable, satellite, fiber, etc.)
export const providerTypes = {
  "xfinity": "cable",
  "comcast": "cable",
  "spectrum": "cable",
  "charter": "cable",
  "optimum": "fiber",
  "altice": "fiber",
  "directv": "satellite",
  "dish": "satellite",
  "viasat": "satellite",
  "earthlink": "fiber",
  "hughesnet": "satellite",
};

// Provider colors (for branding)
export const providerColors = {
  "xfinity": "#f28d00", // Xfinity orange
  "comcast": "#f28d00",
  "spectrum": "#0076ce", // Spectrum blue
  "charter": "#0076ce",
  "optimum": "#D74620", // Optimum red
  "altice": "#D74620",
  "directv": "#00a1e1", // DIRECTV blue
  "dish": "#ec1944", // DISH red
  "viasat": "#0057B8", // Viasat blue
  "earthlink": "#0078D7", // Earthlink blue
  "hughesnet": "#004990", // HughesNet blue
};

// Base64 encoded logos for when direct loading fails
export const spectrumDealerLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAYq0lEQVR4nOzdeXyTVd4H8N/TNE3SvU3p3hbaUihdgLKVHQQGQcYZQQYBxwEVR8RxAR0dHUXlRUcdeVFHRxlxRkVFHBQQZBFkK1uB0pbutKVt6ZY2TZrmef+4JTS0SZs0TR7a/r79vF7wJM997pOmX8895znnOYQxBoFAMH4Ieg+AQJAEEkKBgQMJocDAgYRQYOBAQigwcCAhFBg4kBAKDBxICAUGDiSEAgMHEkKBgQMJocDAgYRQYOBAQigwcCAhFBg4kBAKDBxICAUGDiSEAgMHEkKBgQMJocDAgYRQYOBAQigwcCAhFBg4kBAKDBxICAUGDiSEAgMHEkKBgQMJocDAgYRQYOBAQigwcCAhFBg4kBAKDBxICAUGDiSEAgMHEkKBgQMJocDAgYRQYOBAQigwcCAhFBg4kBAKDBxICAUGDiSEAgMHEkKBgQMJocDAgYRQYOBAQigwcCAhFBg4kBAKDBxICAUGDiSEAgMHEkKBgQMJocDAgYRQYOBAQigwcCAhFBg4kBAKDBxICAUGDiSEAgMHEkKBgQMJocDAgYRQYOBAQigwcCAhFBg4kBAKDBxICAUGDiSEAgMHEkKBgQOL0ev9c+fOHTt27PPPPx+s9gdCXV1dSkpKfHx8SUmJTCbTezgCtwoi9B6CixhjZ8+ePXHihM1mS0pKEov5Pnyr1Xrx4sWGhoaioqLIyEi9hyNwqwg3QsgYu3DhwiefffHjjz9WVzeMHTumqKhI7yG5ZrfbT548WVZWFhmT8MLrb8ydO1fvEQncQrxwRFhXV3cgP39nxs5z585JpdLi4uL4+HiJRKLLeI7EBhUd5Dc0GEwmE0EQWVlZNTU1ycnJUVFRhBBdBiRwSwmmI8Ka2tq8vJx9+/ZVV1c/8MADiYmJ4wvH5ebmVlZWhoeH6z1Ad+Lj4wsKCvLz8wsKCuLi4vQejsAtJ2iE0GAwnDlz5vPPP8/Ly4uPj585c+bcuXMB2Gw2o9FoMpnCwsIkEondbgcQHh4eGhoaHCN1JSoqSq/XZ2dn79q1S6PRZGVl6T0igVtL4ITQZrNda22tq6urq69vbGy02+3R0dFGozErKys9Pb2goICm6bi4OJvNptfrCwoKpk2bFhYWplKpbDZbVVVVXl7eggULYmNj9T4UF2JiYsrLyw8dOvTOO+8kJCQ89NBDeo9I4JYSmCSN2Wy+cuVKXX19XX29Xq+naTouLq6urk6r1U6ZMiU+Pl6tVoeEhDi2pGkaQExMTGRkZHl5+c8//3zs2LHJkydnZGTExcWFhobabDaTyVRTU3PhwoXz58+HhoYmJiYOOqMOCIqiUlJSSktLP/744/j4+NTU1ODZtcCtYmyFkDF27dq1q1ev1tbV1TU0MJa2cOHCL774Qq/XZ2VljUgMnKFp2mazlZWVnT17dt++fXFxcTqd7vLly8ePH6+urjYajZGRkYmJibNnz16wYEFCQsIYH5APYmJiLl68+PXXXyckJGRkZOg9HIFbxVgJocFguHLlypUrV+rq6hiTFBbOiY8fFx9vsVjy8vKMRqPFYomMjPRn+zabrbq6uqKiora21mw2x8TExMXFpaWlTZo0iasp+2CiKGr69Onff//9hx9+GBcXp9FoeI7n/PnzVVVVCxcuDMKZCYGx4HchbGlpqa2trayqamxstFrtsbHjxo2LjomJiYqKAmA0GvPz861Wa2lpaXJysl8+8mazubi4uKCgYMqUKRkZGRqNhuuf5+l3o9EYTCZ9TExMTExMXl7e+++/n5CQsGLFisDuWuA2MUpfNcZYU1NTVVVVTU1NU3OzzUbFxuq02hSNJiU21mkOvaSkJD8/v7CwcPz48SNqxGQylZaWXrp0qbq6OiwsLCkpKSUlJS4uLjw8fGQHMjbS09OLi4vz8vIyMjI0Gk1Z2YXKygrG4gyGOpPJrFQqaJqRy+VKpUKtrktOTg7mORSBgPE9Qmi321taWhsbG+sb6hsaGmw2Rq2OValU0dHRsbGxLpbGDAZDSUlJSUlJZGTksI1YLJaSkhJnSdBqtampqWlpaV45LwQThUKRnJxcW1u7c+fOmpoa1q41mowtLS1NzYaGhgaTCTLZOLU6PCpKHh0dHR0dHRkZEx0dRZLCglKB4fgmhBaLpbGxsbGpqbGxsb6+Xq2O12oTtdoxWd6wWCwXL148efIkRVEulRAEMepFksGn0+lOnTr12WefJSUlPfroo9OnT3e+sKam5uTJY5WVVRERkVZrq1QqVyjkZvO1kJCQqKjImJjo6Oho9CiZOBgnr5qtVmtzc3NTc3NTc3NTUyNjjFodq1arYmJi1Gq12+c/X7HZbGVlZadOnaqvr09JSRmnUt1///3B5lrhF5qmxWJxbm7uvn37dDrd/Pnzw8LCXGyrUCjmzJlrMBiKiopramqUSoXZbG5qMjQ2GiIiIqOiIqOjo6OiomQymfBoP3G4F0LGWEtLS3Nzc3Nzc0tLi8lkdvgpqdX8/JQcZvvCwoK6urp58+ZlZWXFx8ffrOsOMTExzc3Nu3fvLikpeeihh7RabX193eXLF5uajEajwWw2W60Wk8lssVhMJpPFYrHb7SaTSeOYohGeKSeQEfW+sVgsjY2NLS0tuq5+SmFhYREREaGhof5x8WCMnT17Njc3V61Wr1+/fvr06cHmxudrYrE4MzPz4sWL7733nsVSr1CMU6li1OoYtTpKKpVQlEgioSiKUatN9fU11dXVKpVSqVRGRkaGh4eHhYXJZLLg/5EJOI1zCBlj5vZ+Ss3NzczO1OpYnU7Xl59SaGioTCbzm1+owWA4cODA+fPnH3744UWLFt2G39qIiIgLF85FRGiioqIC01VLS8ulSxeKiopraiI0mpT4+PjwvqULwiRDEBk5b42m9n5KLcZ2PyVVdLReHx4eHhEREWzfCGd2u/3ChQs//vjj7NmzN2zYcFu+TRERERqN5tixowaDISC9KRSKGTNmWa3WmpoavV5fVVVlsVhCQkJUKlV0dHRkRITwe+SrzZBCyBhrbm5uat9Cb7NRcXEpmZnKIPVTypk6taamZvXq1bfVrO0gSUlJO3bs+OSTT5577rnA9iiXy2fOnNX1mNVqNRgM9fX19fXXLBaLMzGVWLhRc2VTB0LIGGtubn78iSesVkYQxKpVq5YuXRoZGRm0V/MXX3xx4cKFjRs3BuHjZXwXGhqalpZ28ODBJ598Mjc3NyoqKn/v3vDw8MCNID4+Pj4+Pu1eVGZn26WnDhOFDaJeL+quQnj+/PnPPvts+/btHRHF7t27jx07VltbGx0dHbRnzV02bdpUWVk5f/58vQeit7CwsCVLlmzZsmXatGnPPPNMRkZG3p49iqioqChVYIcRPW5cILu7bXQJIWPsu+++Ky8vP3r0aE5Ozt69e1988cXKykoAW7Zs0enG+9c94k8VFRUqlUqr1eo9kOAgFovnzZsXEhJy9OjRzZs3b968eenSpXK5XJik1ZmjELa0tOzbt2/x4sXffPPNBx98kJGRAaCoqIhl/fXXX4eHh4eHhwdtCF9++eUTJ07oPYrgoVKpVq5ceezYsR9++OHZZ59NSkoKm/D0cB/XcJLEm5GjED711FOvv/76+PHji4uLDx48aDabMzIy7Ha7RNL3CSuLxaLX63nOYjLG6urqiouLnZ8KCwvr62tYYMbicDFwRn1qaen58+fXrFmj0Wj8+R+x2+wXL13SaFKCagloLH+dPHwhPvk4jjB7+XLd1atXz549GxYWVlJSMnPmTH9+LbGxsb2FkDF2+vTp3bt3d11z5swZq9WqVCp7d99gjCmVSj7HhAsWLEhNTXXsIT8/v6amJj09vfebQQDzTW+uXLkSvOsKw6wpQlGUWGLdvXt3SUmJ33eemJh44cIFxti1a9cuXrz41VdfbdiwYeXKlQAsFovRaFQoFDRNd4ogf3FxcaWlJUuWLPUqnP78vfBzpPxHMCa93XbmKIQtLS15eXkFBQXFxcWJiYmRkZGLFi1q25ExJpFIOK7lDvvYn91ur6+vP3HixNGjR+12e2ZmpuMLBaDRaHQ6XXl5eXl5+Z133qlSqTQaTVR0dIj3z5oMQhMnTty+ffuVK1c0Go1fd64yGLRabWVlpV/7PH369I8//qhSqVJTU0NDQ0tLS++///677rqLYo4FZYIgCGLkyY9A91P2TQg5CuGnn3568ODBwsLCvLw8q9WakpISGRnZNUZoNpuVSiXHUqHdbu/9v3XlyhWHBdXGjRvvvvvuXteLYmNjS0tLzWbz6dOnT58+rVQqtVqtRqOZNGmSl/viBrfTnZqa+s0337z00ks0TfttzyZTu6OzXq//9ttvS0tLU1JSlixZsmzZsjVr1nRdkHI2eBWH/gYJCwvjGD+/SWmvQiiTyZYsWZKdnS2Xy2NjYwdZWbBarXK5vPdvrc1mKy0tPXv2bFlZmdls3rBhw4svvjjoM/XO7xcaGhqampouX75cXl5eUFCQm5s7ceJENO2j2r17d2lpKc+NAszzb4rjyTEhISGnT5/2/c47WK1WrVbL8cvbm/Ly8vfff3/Dhg2rVq0acHBe+aAZDAadThdUa4Q8bwwchdBsNvf29JSfn+/oZOfJKqxEIpmQnNzY2Oju/BIEQVFUaWlpaWlpYWGh2WxOS0vbuHHj9OnTfXp6SiqVpqWlpaWlAairqysrKyspKampqYmPj09ISOB4HL0WCsMwjKsj4jIhjAyxWJyZmblnzx42a5ZPl8zQG42GYL5ULl++XF9fX1hY2GsI/UZdXR2XBTY+8PyDBSCEf/nLX06dOgVg48aNnc+SsbGxV65cmZCcPCGZ+7Zd1Wo1d+3l5uZeuXLl8OHDR44ciYiISE1N1Wq1CQkJfpjXiImJiYmJycjIMJvNdXV158+f379/f0hIyLp161JSUvx2cE5OMYyBMWbv9b9XGMGMD4DZs2d/8803L7/8Mk3T3D/UfWKxWFNTU4NqQWPoTlILCwvT09MvX77sehvudLPZHFRRGATPBQlACJubm7/77rtdu3YdOXJk0aJFnS/MzMxMTk7Wu/sHZU1NTdXV1Y51UJqm7Xa73W4vLi4+ceLEyZMnSZLUaDTJyckTJkyIj48fi0VVAMA///nPVatW+a3DQbFYrBKJpLGhISEhwe1VGqS/E+9JCM1ms0Kh8L7fDhKJJGhDyHOjQAihrz+RhISEzZs3b9myRaPRzJgxo+vFIsUQS6OMsdra2vPnz5eXl+v1eqPR6Gg8KSkpKytr3bp1mZmZY/1kwaJFi3bs2PHcc8/5aVIvNSUlOTk5iENYWloa6KdEjwq73e7PK5Tjvw3HyWUAX3zxBc9wARCJRHffffdHH320adOm++67j+NneosV9bplEMZYU1NTUVFRaWlpeXm5Xq83Go1KpTIhIUGj0dx5550TJkyIiooK2IJbWFjYvHnz3n//fb8JoVjMJk+enJiYMGx4g8BNN2+BEJvNFl49h+f5FT51NnPmzPfee++NN95ISkrq+u1mBDFAP9enoL79PnhDTU1NSUlJVVlZUVGRTqfT6XTJyclTpkzp+DtCRET4xAnjvTqcwFm6dOnu3bt9ut2z2+1NTU02m7W6ulokEsXGxoaGhvb0y9x2jOnzeEu73R50Ueg4m3LB91sQwveeeeGFF7KyshhjDQ0NMpns7Nmz06dP1+l0Eya0e7eY29cIG5uaysrLy8rKrly5UlVV1djYGB0dPWnSpMWLF0+fPj0uLq5rFF1vOwwAaWlpt99S+s1oNBppmh4RLpVKOV4yfGK3240NDQZDo88fH5Ll5eXtk/MczzvzPfm2P7YeGhoaHh6+YsUKR2XdU6dO2Wy27Ozsw4cPz5s3b8KE9sUppr+2a23t6SkOSZLcLwRnVqvVYDBcvXq1urq6qqqqqakpNjZ20qRJs2bNWrJkSWxsbG9HMWgIExPjJycnp6end3Tw66+/7ty585lnnuG+l8Do9oVwnJ1nzZr1ySefvP322yONQt9IRCIRl9Wb0cMYM5vNJpPJbDa3tLSQJBkeHh4eHh4WFjavT93CrVu35uTkzJ49e8qUKTRN98/f+np/7A79nKSkpCVLlnz11VcffvhhenpaeDhvsXFLJpOlp6frdLqJEye6LrPFYDBK/FLJsH/8MpnMZrMZDAaHkUJHnCNAra2tLS0tNput1Wq1WCytViuf5dQRQJLitLS0iIgIriMAEBkZqddfu3r1qk6nGzqEnn+cPSWEixYt+uc/P3zttdc2btxYU1OjUqkGPSL8Zy8uHnOB5cknn1y3bt1HH31ksVj0er3RaGxpaTGbzXa7PSQkxGKxMJS2tLTYbK1WqzU0NFSpVHSYd3S9+bXb7VarlWGY0NBQgiDe4r4Wp9PpDBER169djY+PH3Jbrv+lvvNGCGmabmmZnJWVlZKScvz4cevFixMnTmzpWNDv9X3NYDCQpNg/iXijoqI4rqC4JRKJlEqlUqlUKBQKhUImk8lkstDQUJIkvU0f9xB2ZjaZ9AaDXq8XicWtVqvFYjGbzTabzcE4t9Xh/URRFFe/bU+lQpqms7Ozf/nlF51OFxkZ2Ss5QDwPISFE5Mdl70GmTwgiKiqKpmmr1WqxWPq5fExMTEpK4mPqcAcWi6WxsdFoNBJEO06bUWtrq/NNu7OJUqmUJMnQ0FCKCvGn0sEYm5Sc3PVJkhKJRC6XExQVGhoanEoPIGfPnlUoFIwxkUjkTJ75K3HQsUYYExPjdOoIQo7nY7iGYXcIIUlJSXPnzjUYDJcuXSotLZ08ebJbERYEhEgkio6Odo1QQb97/FarVafT1dTUiGi6paXFERhPtd4dIQwJCQl0CEeF3W6vqqqyWCwMwzAMM3369IESB76+bQ6mEPLs4YYJISHknnvusdlsUVFR3LMdC/iFSqWaO3funDlzuv75GvOGcHV1dXNzs9lsbm1ttVqtDMME+oIYdePHj1epVI4owcDhARBUXZw8fxDDh1AkEnVkO0VCGPzGMvFtbnaHkBQVRVH86a0B+EFJSUlDQwNFUVarlSCII0eOeCWEHvs95vT/IYRCQjjx4sW6RkNBQYHFYtHr9Xa7XSwWE0TIsCH05xkxCIjF4tjYWIfj5u7du2fNmuWD/IA/tbeioqK6ulqtVgf0XOeBwYLmMTExfCxR3nBCGKFURKrVJiPDMB0ltfnMmHHB95qoUqmcNWtWXl5eYmLikJ69Q8OvELqFEMKrCCInx3r2bHFhYeGYZ9LgA88SBQ4hJElyzpw5NTU1qampY55Jgw/BC2F7VviQENMY64YRfpNBgxDilXuAHzAMI5fLRzNlO/j+GvP5TYWScIFlrODvtDN8CFtbW/Py8lpbW7VabVpaGh9JbQSC8GUKLAEpkM2d4UOYnJy8fv16inKntJtgVHDMsSMQcMVfHhs3yKkxmFcZ+GCxWH5tsO7ZsyckJMQrj2aBwA08nzELRggpimppaWlqamptbTUajSRJOspahdAwcWmYl5en0WiGyg4sEPDEX/f9wQuh2Ww+ffr0sWPHrl69SlGUVqs9c+ZMS0sLbqfytoKbjcPBSalU8itN4LZSYWFhRETExIkT0RZ0XRAQjrZ7YzGptNv95pweeMGSJKn09PSvvvrK5RSCU5iXi4Ru+fG4AxNIiFQqXb16NZ8nAQYCrzx3eRY8GSsC67LJcYpGp9MtXLhQeL5J0CsQYb3oc03HlEP7Y4jDHSQGRjIW2UVGR0AeJXILdytk6TlxpNu9uBwZEsLbAX+loOYj7uSGqEfIB0GrYOD5S+DPn8QtJoTcP4wCQSDBs5SRWwKQ60UQjBCKxWK+ZXQEAv/gpxByvLxviBCKRCLHr8QxR9j7Q0JIkoibwAT1VToofoU5C1oIPY/V51HfboRKxuKxIJjPNRytF2bAYpqbe4zbuP8EfM3VNSJCl+OFWPOJYNTPCrKJdJ6TmgRBhIaGYmDOvpsEBbRvgxA6/rjmk7rZfVVuTgRHjF2Ec4S7AEGQJCkSiRypLtwKXGBMpgkDApK+aQAC/nR2jsgTiUQikejXrQh/3d3tP7y9OgP+y+qSsJFn/8Hm4nDreLUKBPzE80N73A7fVgjdbZpne25tPxg3w3MzNydC9hoB/3AL4ah8m4LtSjcVeK4R9kyQhK6H0mtxqEEfGbgZJyaE3BTgvqbVu4UQLhHmCEf8BHEB6O+iCjw3gjAFVjD+bISxCIIRzw28FSzxccC8DaEjeXGn0vg8n5wbxBMygYB73DxHbogQkiQZExNDEITrmoYQOUJHSAYTwt7WCIe8EJya45mfWODm4ecQjsUdZjCFcNhIOpPF9vo8Em/PDSFugj4cT8V0mLY6JvO4OV3y4bcQ8sE5hF0j7OyCN+rCnoF0HmzPLZwxdJF2F2FhvFDQF57CwP0c5JlfGK6nq7sNdF0rHKpw70ghHPL27NZmQ1fOYBcOnDhbLrhRuSm5+l0F33wUz4kQQnHXvzpnyB0xXgVWb5nwhugqoBcgEPjGTSCEPCe+RrwLQX/BcmQYcQslh+oMriR78/YgGFshGJbgmOUYFOGyzs/zzOPtzkc/hhH2Z3E+bnfrrx1xuLuGrfNmgpsQ/gy5PQrOG0MXaXf65XlV3kx9jeZa6EWw/ZMFu17TN6j4ey8yCuUNu8L9wNxtiPuXlv8dwlhhEA6Rz5vZsMq1dXCEv9YCQ1z1XG5OBK35jJtGXPiwOMzzKu/dSni3FWzfGE8IZgf8YcOLrzvCzRXCYceIuiLMSt6CuOmEkCdcv7TcL3B3H1jldl8j1M4QzycKBBxwt36iL/lrvghPE/w8H9bj2DCHdM9jlQkEQYhLtTgBfnA5ZXkhZG7iPULTz6jkPmk06gIPNyq+l5VQbklwEwhhkKdaIQii2wHp8yYLYcueCFtKPOGYsdDlZfcUWz0jPew+BMEFvwfGvXopJDn/RcBdOfgPwqUrgrDp48WV3Quhuw/i8Ry5YIxwTPs0uniJ+JpJRzDW+OCJu21GIFfLXcbw5z9PMCJBc7EG+hhHw40qhOLRacfNnXDpLXA7GfUSxiNYu9PpvDXSB6YEgg78HBgv0ggIzxEKDBzIF1tg4EBCKDBwICEUGDiQEAoMHEgIBQYOJIQCAwcSQoGBAwmhwMCBhFBg4EBCKDBwICEUGDiQEAoMHP8fXQZ5ZRLf7Q0AAAAASUVORK5CYII=";

// Provider detection functions
export const detectProviderFromFilename = (filename: string): string | null => {
  const lowercaseFilename = filename.toLowerCase();
  
  // Check for Xfinity variations
  if (lowercaseFilename.includes('xfinity') || lowercaseFilename.includes('comcast')) {
    return 'xfinity';
  }
  
  // Check for Spectrum variations
  if (lowercaseFilename.includes('spectrum') || lowercaseFilename.includes('charter')) {
    return 'spectrum';
  }
  
  // Check for Optimum variations
  if (lowercaseFilename.includes('optimum') || lowercaseFilename.includes('altice')) {
    return 'optimum';
  }
  
  // Check for DirectTV
  if (lowercaseFilename.includes('directv') || lowercaseFilename.includes('direct tv')) {
    return 'directv';
  }
  
  // Check for Dish Network
  if (lowercaseFilename.includes('dish')) {
    return 'dish';
  }
  
  // Check for AT&T variations
  if (lowercaseFilename.includes('att') || lowercaseFilename.includes('at&t')) {
    return 'att';
  }
  
  // Check for Verizon variations
  if (lowercaseFilename.includes('verizon') || lowercaseFilename.includes('fios')) {
    return 'verizon';
  }
  
  // Check for other providers
  if (lowercaseFilename.includes('earthlink')) {
    return 'earthlink';
  }
  
  if (lowercaseFilename.includes('hughesnet')) {
    return 'hughesnet';
  }
  
  if (lowercaseFilename.includes('viasat') || lowercaseFilename.includes('exede')) {
    return 'viasat';
  }
  
  return null; // Provider not detected
};