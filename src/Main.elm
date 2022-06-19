module Main exposing (main)

import Html exposing (div, footer, h1, i, main_, p, span, text)
import Html.Attributes exposing (class)


view =
    div []
        [ main_ [ class "section" ]
            [ div [ class "container" ]
                [ h1 [ class "title" ]
                    [ span [ class "icon-text" ]
                        [ span [ class "icon" ]
                            [ i [ class "fa-solid fa-rocket" ] []
                            ]
                        , span [ class "ml-2" ] [ text "Title" ]
                        ]
                    ]
                , p [ class "subtitle" ] [ text "subtitle" ]
                ]
            ]
        , footer [ class "footer" ]
            [ div [ class "content has-text-centered" ]
                [ p [] [ text "footer" ]
                ]
            ]
        ]


main =
    view
